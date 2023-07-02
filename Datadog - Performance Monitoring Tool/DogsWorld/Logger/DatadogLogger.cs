using Datadog.Trace;
using System;

namespace DogsWorld.Logger
{
    public class DatadogLogger
    {
        public static void AddTag(string key, string value)
        {
            Tracer.Instance.ActiveScope.Span.SetTag(key, value);
        }
        public static void AddException(Exception ex)
        {
            Tracer.Instance.ActiveScope.Span.SetException(ex);
        }
    }
}
